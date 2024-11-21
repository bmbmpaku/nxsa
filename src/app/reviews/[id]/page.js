import { db } from "@/utilties/db";
import ReviewsPage from "../page";

export default async function SingleReviewPage({ params }) {
  const id = (await params).id;
  const result = await db.query(`SELECT * FROM reviews WHERE id = ${id}`);
  console.log(result);
  const book = result.rows[0];

  return (
    <div>
      <h2 key={reviews.id}>
        {reviews.hotel} - {reviews.star} Stars
      </h2>
      <p>
        {reviews.content} - {reviews.city}
      </p>
    </div>
  );
}
