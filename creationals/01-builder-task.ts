//! Task : Create a QueryBuilder to construct SQL queries
/**
 * It must have the following methods:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- if no fields are passed, all fields (*) should be selected
 * - where(condition: string): QueryBuilder - optional
 * - orderBy(field: string, order: string): QueryBuilder - optional
 * - limit(limit: number): QueryBuilder - optional
 * - execute(): string - returns the SQL query
 * 
 ** Example of usage:
  const usersQuery = new QueryBuilder("users") // 'users' is the table name
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Query: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

import { COLORS } from "../helpers/colors.ts";


  class QueryBuilder {
    private table: string;
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderFields: string[] = [];
    private limitCount?: number;


    constructor(table: string) {
        this.table = table;
    }

    select(...fields: string[]): QueryBuilder {
        this.fields = fields;
        return this;   
    }
    
    where(condition: string): QueryBuilder {
       this.conditions.push(condition);
       return this;
    }
    
    orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
        this.orderFields.push(`order by ${field} ${direction}`);
        return this;
    }
    
    limit(count: number): QueryBuilder {
        this.limitCount = count;
        return this;
    }
    
    execute(): string {
        const fields = this.fields.length > 0 ? this.fields.join(', ') : '*';
        const whereClause = 
            this.conditions.length > 0  ? `WHERE ${ this.conditions.join(' and ')}` 
            : '';

        const orderByClause = this.orderFields.length > 0 
        ? `ORDER BY ${this.orderFields.join(', ')}`
        : '';    

        const limitClause = this.limitCount ? `LIMIT ${this.limitCount}` : '';

        return `Select ${fields} from ${this.table} ${whereClause} ${orderByClause} ${limitClause};`
    }
  }

  function main() {
    const usersQuery = new QueryBuilder("users") 
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .orderBy("age", "DESC")
    .limit(10)
    .execute();


    console.log('%cQuery: \n', COLORS.red);
    console.log(usersQuery);
}

main();