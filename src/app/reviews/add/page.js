import { db } from "@/utilties/db";
import { redirect } from "next/navigation";

export default function AddReviewPage() {
  async function handleAddReview(formData) {
    "use server";

    const reviewer = formData.get("reviewer");
    const city = formData.get("city");
    const hotel = formData.get("hotel");
    const reviewc = formData.get("reviewc");
    const date = formData.get("Date");
    const star = formData.get("star");

    await db.query(
      `INSERT INTO reviews (reviewer, city, hotel, content, Date, star) VALUES ($1, $2, $3, $4, $5, $6)`,
      [reviewer, city, hotel, reviewc, date, star]
    );

    redirect("/reviews");
  }

  return (
    <div>
      <h2>Add New Report</h2>
      <form action={handleAddReview}>
        <label>Reviewer</label>
        <input name="reviewer" placeholder="Reviewer" />
        <label>City</label>
        <input name="city" placeholder="City" />
        <label>Hotel</label>
        <input name="hotel" placeholder="Hotel" />

        <label>Review</label>
        <input name="reviewc" placeholder="Review" />

        <label>Date</label>
        <input name="date" type="date" />
        <label>Star</label>
        <input name="star" type="rating" />

        <button>Add report</button>
      </form>
    </div>
  );
}
