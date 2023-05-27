

export const listeAction = () => {
    return (dispatch) => {
        const liste = [
            { id: 1, name: "Milk", description: "Bottle of milk", price: 2.5, stock: 10, img_url: "https://www.thespruceeats.com/thmb/Dk1kSV4VrhMMydNQ1aahuFcOCho=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/potato-milk-5218684-hero-03-9bd26d6a5fd34025b072f6256e039652.jpg" },
            { id: 2, name: "Eggs", description: "Pack of Eggs", price: 3, stock: 15, img_url: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MIOZ2BSHKAI6TFFL2LO2HQG7KI.jpg&w=1440" },
            { id: 3, name: "Bread", description: "Pack of Bread", price: 1.5, stock: 20, img_url: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/paul_hollywoods_crusty_83536_16x9.jpg" },
            { id: 4, name: "Juice", description: "Pack of Juice", price: 4, stock: 5, img_url: "https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2022/09/20151923/cover-story-fw.jpg" },
            { id: 5, name: "Meat", description: "Pack of Meat", price: 10, stock: 0, img_url: "https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg" },
            { id: 6, name: "Fish", description: "Pack of Fish", price: 8, stock: 3, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzMcq9lLJsNfDBrXti24s2QGcjOwFWeosn7U_-ogZq97HtRdix19fM5-vyWTkGR_H-3I&usqp=CAU" },
            { id: 7, name: "Cheese", description: "Pack of Cheese", price: 5, stock: 7, img_url: "https://www.cheese.com/media/img/cheese/emmentaler_istock.jpg" },
            { id: 8, name: "Butter", description: "Pack of Butter", price: 2, stock: 10, img_url: "https://ca-times.brightspotcdn.com/dims4/default/f7bb773/2147483647/strip/true/crop/5961x3130+0+407/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F65%2Ff8%2F37424984402ca0efd510f3753078%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1241169622" },
            { id: 9, name: "Yogurt", description: "Pack of Yogurt", price: 1.5, stock: 15, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/640px-Turkish_strained_yogurt.jpg" },
            { id: 10, name: "Ice cream", description: "Pack of Ice cream", price: 3, stock: 20, img_url: "https://www.seriouseats.com/thmb/psLdr3356yqqFcm1o1_zxQ4YxEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-dark-chocolate-ice-cream-recipe-hero-446dacb9d3ce443e8e9880dbd095ef4c.jpg" },
            { id: 11, name: "Chocolate", description: "Pack of Chocolate", price: 4, stock: 5, img_url: "https://www.lacocinasana.com/static/28c3b6f8448498c026e2ff162890948e/chocolate_492332134_bfbb78b0_58fb9a5e7b.jpeg" },
            { id: 12, name: "Candy", description: "Pack of Candy", price: 0.5, stock: 100, img_url: "https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/gti5ndttekv6zokuj.jpg" },
        ];    
        dispatch({ type: "GET_LISTE", payload: liste })
    };
};

export const deleteListeAction = (id) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_LISTE", payload: id })
    };
};

export const editListeAction = (id, obj) => {
    return (dispatch) => {
        dispatch({ type: "EDIT_LISTE", payload: { id, obj } })
    };
};

export const addListeAction = (obj) => {
    return (dispatch) => {
        dispatch({ type: "ADD_LISTE", payload: obj });
    };
};

export const logginAction = () => {
    return (dispatch) => {
        dispatch({ type: "SIGN_IN" })
    };
}
