import db from './connect';

class ItemModel{
		constructor(){}
		async addItems(sql,val,tab){
			 let data=await db.query(sql,val).then(function () {
	 		 			return db.query(`SELECT * FROM ${tab} WHERE content = '${val.content}'`);
			 	});
			 return data;
		 }
		async selectData(sql){
			//console.log('111');
	 		let data=db.query(sql).spread((rows)=>{
	 				return rows;
	 		});
	 		return data;
 		}
 		delet(sql){
 				db.query(sql);
 		}

}
export default ItemModel;
