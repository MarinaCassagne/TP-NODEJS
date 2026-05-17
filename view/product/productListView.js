function productListView(req, ListProduct) {
  return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>

                ${ListProduct.map
                (product =>
                    //.map permet faire un tableau du style .map → [<li></li>,<li></li>,<li></li>]
                        {
                        return `
                        <ul>
                            <li>${product.name}</li>
                            <li>${product.description}</li>
                            <li>${product.price}</li>
                            <li>${product.quantity}</li>
                            <li>${product.createdAt}</li>
                        </ul>
                        `
                        }
                    //permet de mettre en chaine de caractères le tableau créé par .map il remplace les , par un espace ""
                ).join("")}

            </body>

        </html>
        `;
}

export default productListView;
