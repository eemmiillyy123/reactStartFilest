
// export default function fn(){
//   console.log(1);
// }
//每個檔案只能有一個預設匯出(不一定要給名稱)
export default{
  myName:'emily',
  fn(){
    console.log('我的名字是',myName);
  }
}
//每個檔案能有多個具名匯出
//export+定義(固定名稱或方法))
export const myName='emily';
export function fn(){
  console.log('我的名字是Jay');
}