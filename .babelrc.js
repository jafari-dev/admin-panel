require("@babel/parser").parse("code", {
  sourceType: "module",
  plugins: ["jsx", "flow"],
});