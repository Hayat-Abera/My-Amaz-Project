import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/LayOut/LayOut";
import Styles from "./orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    // Firestore path: users/{uid}/orders
    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    // Listen to real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Cleanup listener on unmount
    return unsubscribe;
  }, [user]);

  return (
    <Layout>
      <section className={Styles.container}>
        <div className={Styles.order_container}>
          <h2>Your Orders</h2>

          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have any orders yet.</div>
          )}

          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((orderItem) => (
                  <ProductCard
                    flex={true}
                    products={orderItem}
                    key={orderItem.id}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
