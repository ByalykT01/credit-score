// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  text,
  integer,
  boolean,
  real,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `credit-score_${name}`);

export const loans = createTable(
  "loan",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id", { length: 256 }).notNull(),
    loan_id: serial("loan_id"),
    no_of_dependents: integer("no_of_dependents").notNull(),
    graduated: boolean("graduated").notNull(),
    self_employed: boolean("self_employed").notNull(),
    income_annum: real("income_annum").notNull(),
    loan_amount: real("loan_amount").notNull(),
    loan_term: integer("loan_term").notNull(),
    cibil_score: integer("cibil_score").notNull(),
    residential_assets_value: real("residential_assets_value").notNull(),
    commercial_assets_value: real("commercial_assets_value").notNull(),
    luxury_assets_value: real("luxury_assets_value").notNull(),
    bank_asset_value: real("bank_asset_value").notNull(),
    loan_status: text("loan_status"),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.userId),
  }),
);
