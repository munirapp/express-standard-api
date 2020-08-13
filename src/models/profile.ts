import knex from "../../database";

class Profile {
  private db: any;
  private table: string;

  constructor(db: any, table: string) {
    this.db = db;
    this.table = table;
  }

  async all() {
    try {
      const data = await this.db.select().from(this.table);
      return { total: data.length, rows: data };
    } catch (error) {
      console.error(error);
      throw "error can't get all profile";
    }
  }

  async paginate(limit: number, offset: number) {
    try {
      const data = await this.db
        .select()
        .from(this.table)
        .limit(limit)
        .offset(offset);
      return { total: data.length, rows: data };
    } catch (error) {
      console.error(error);
      throw "error can't get paginate profile";
    }
  }

  async findByID(id: number) {
    try {
      const data = await this.db.where("id", id).select().from(this.table);
      return { total: data.length, rows: data };
    } catch (error) {
      console.error(error);
      throw "error can't get detail profile";
    }
  }
}

export default new Profile(knex, "profile");
