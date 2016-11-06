import Iteme from './../models/addlist';
const ItemeModel=new Iteme();

class IndexControll{
	index(){
		return async (ctx,next)=>{
			let tab='list_tb',
					sql=`SELECT * FROM ${tab}`,
					//console.log(sql),
					items= await ItemeModel.selectData(sql,tab);
					ctx.body = await ctx.render('index',{
						title:'Node.js ToDoList',
						intro:'输入今日待办事项',
						items
					});
		}
	}

	getDate(){
		return async (ctx,next)=>{
					let content={content:ctx.request.body.item},
					tab='list_tb',
					sql=`INSERT INTO ${tab} SET ?`;
					//console.log(sql,tab,content);
					let rows= await ItemeModel.addItems(sql,content,tab);
					let r=rows[0][0];
					ctx.body={
						id:r.id,
						content:r.content
					};
					//console.log(r);
		}
	}
	deletDate(){
		return async(ctx,next)=>{
				let id=ctx.request.body.id,
						tab='list_tb',
				sql=`DELETE FROM ${tab} WHERE id='${id}'`
				let rows=await ItemeModel.delet(sql);
				await console.log(rows);
		}
	}
}
export default IndexControll ;