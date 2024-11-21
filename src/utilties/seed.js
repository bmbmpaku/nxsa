import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`
    INSERT INTO "public"."reviews" ("id", "reviewer", "city", "hotel", "content", "Date", "star") VALUES ('2', 'Owen', 'London', 'Hilton', 'The coffee tasted delightful, the fluffy marshmallow-esque whip is to die for', null, '5'), ('3', 'Ben', 'New York', 'Moxy', 'The coffee tasted abysmal, it was such a shame', null, '4'), ('4', 'Glen', 'Paris', 'Ibis', 'The coffee tasted delightful, the fluffy marshmallow-esque whip is to die for', null, '4'), ('5', 'Cohen', 'Lisboa', 'Sheraton', 'The coffee tasted delightful, the fluffy marshmallow-esque whip is to die for', null, '3'), ('6', 'Bowen', 'London', 'Hilton', 'The coffee tasted delightful, the fluffy marshmallow-esque whip is to die for', null, '4'), ('7', 'bob', 'london', 'hilton', 'it was okay', null, '3'), ('8', 'Nabba1987 ', 'Hull', 'Mcgeachie suits ', 'Loved it, the depth to the roast was next to none', null, '5');
`);
("use server");
