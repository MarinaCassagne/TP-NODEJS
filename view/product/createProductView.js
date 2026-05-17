function createProductView(req) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="" method="post">
      <p>
        <label for="name">
          Name :
          <input id="name" name="name" type="text" required />
        </label>
      </p>

      <p>
        <label for="description">
          Description :
          <input id="description" name="description" type="text" />
        </label>
      </p>

      <p>
        <label for="price">
          Price :
          <input id="price" name="price" type="number"/>
        </label>
      </p>

      <p>
        <label for="quantity">
          Quantity :
          <input id="quantity" name="quantity" type="number"/>
        </label>
      </p>

      <input type="submit" value="Création du produit"/>

    </form>
  </body>
</html>
    `;
}

export default createProductView;