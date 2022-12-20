var swatch_facet_clicked = false;

var __isp_options = {
    isp_serp_callback: function () {
        //change refine btn text
        $jquery_isp("#isp_refine_button").text("Filter");
        //change refine btn img (bigger img saved in /assets)
        $jquery_isp("a#isp_refine_nevigation img").attr("src","https://cdn.shopify.com/s/files/1/2665/0346/t/153/assets/hamburger_icon.png?v=1580856903");
        if(window.location.href.indexOf("Color") > -1) {
            swatch_facet_clicked = true;
        }
        if(swatch_facet_clicked) {
            tempRemoveDuplicates();
            swatch_facet_clicked = false;
        }
    }, isp_max_serp_product_rollover_images: 2,
};

//remove duplicate products based on title
function tempRemoveDuplicates() {
    let idToRemove = new Set();
  	let titles = new Set();
     $jquery_isp(".isp_grid_product").each(function () {
         let product_id = $jquery_isp(this).attr("product_id");
       if(titles.has(ISP_PRODUCTS[product_id].l )){
       return;
       }
         for (var id in ISP_PRODUCTS) {
             if(product_id === id){
                 continue;
             } else {
                 if(ISP_PRODUCTS[product_id].l === ISP_PRODUCTS[id].l){
                    idToRemove.add(id);
                 }
             }
         }
       titles.add(ISP_PRODUCTS[product_id].l );
     });
     $jquery_isp(".isp_grid_product").each(function () {
         let product_id = $jquery_isp(this).attr("product_id");
         if(idToRemove.has(product_id)){
             $jquery_isp(this).remove();
         }
     });
};


  
