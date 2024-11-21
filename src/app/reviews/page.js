import { db } from "@/utilties/db";
import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function ReviewsPage() {
  try {
    const result = await db.query(`SELECT * FROM reviews`);
    const reviews = result.rows;

    console.log("DB Responsive");

    return (
      <div>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.reviewer}</h3>
            <h4>
              {review.hotel} - {review.date}
            </h4>
            <h4>
              {review.reviewc} - {review.star}
            </h4>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Database Query Error:", error);
    return (
      <div>
        <h2>Error loading reviews</h2>
        <p>{error.message}</p>
      </div>
    );
  }
}
