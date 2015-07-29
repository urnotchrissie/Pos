function Pos() {
}

Pos.prototype.print = function(cart) {
  var outputs = "***<没钱赚商店>收据***\n" +
  "打印时间：" + formattedDateString + "\n" +
  "----------------------\n";

  cart.boughtItems.forEach(function(item) {
    outputs +=
      "名称：" + item.name + "，" +
      "数量：" + item.count + item.unit + "，" +
      "单价：" + (item.price).toFixed(2) + "(元)，" +
      "小计：" + (item.getSubTotal()).toFixed(2) + "(元)" + '\n';
  });

  outputs += "----------------------\n" +
  "挥泪赠送商品：\n";

  cart.boughtItems.forEach(function(item) {
    if (item.discountedCount !== item.count) {
      outputs +=
        "名称：" + item.name + "，" +
        "数量：" + (item.count - item.discountedCount) + item.unit + '\n';
    }
  });

  outputs +=
    "----------------------\n" +
    "总计：" + cart.getTotalPrice().toFixed(2) + "(元)" + '\n' +
    "节省：" + cart.getSavedMoney().toFixed(2) + "(元)" + '\n' +
    "**********************";

  console.log(outputs);
};
