var dbLib = {};
dbLib.createTable = function (client, tableName, attributesDetails) {
    var query = "create table if not exists " + tableName + " ( " + attributesDetails.join() + ");";
    this.runQuery(client, query);
};

dbLib.makeInsertQuery = function (tableName, attributes, values) {
    return "insert into " + tableName + " (" + attributes.join(",") + ")" + " values (" + values.join(",") + ");";
};

dbLib.insertNewData = function (client, tableName, attributes, values) {
    var query = this.makeInsertQuery(tableName, attributes, values);
    this.runQuery(client, query);
};

dbLib.makeRetrieveQuery = function (tableName, condition) {
    condition = condition || "";
    return "select * from " + tableName + " where " + condition + ";";
};

dbLib.runQuery = function (client, query) {
    client.query(query, function (err, result) {
        if (err)
            console.log(err, '----', query);
    });
};

module.exports = dbLib;