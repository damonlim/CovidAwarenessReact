const { MongoClient } = require("mongodb");

class DataService {
  async init() {
    this.uri = process.env.MONGO_URI_DEV;
    this.client = await MongoClient.connect(this.uri);
    this.db = this.client.db(process.env.MONGO_DB);

    this._patients = this.db.collection("patients");

    console.debug("Database connected.");
  }

  /* ****PATIENTS**** */
  async findPatient(param) {
    return await this._patients.findOne(param);
  }

  async findPatients(param) {
    const patients = await this._patients.find(param);
    return await patients.toArray();
  }

  async addPatient(patientObj) {
    const insertOps = await this._patients.insertOne(patientObj);

    if (insertOps.acknowledged) {
      const patient = await this.findPatient({ _id: insertOps.insertedId });

      if (patient) {
        return patient;
      }
    }

    return null;
  }
}

module.exports = DataService;
module.exports.instance = new DataService();
