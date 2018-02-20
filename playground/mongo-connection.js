
const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Error while connect to database');
    }

    console.log('Database Connected');

    db.collection('TodoApp').insertOne({
        text:'something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Error while insert into the database',err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    })

    db.close();
});