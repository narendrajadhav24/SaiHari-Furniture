# Saihari Furniture Website

## Files
- index.html - homepage
- category.html - reusable catalogue page for every furniture category
- style.css - complete responsive styling
- script.js - navigation, category routing, product catalogue, enquiry modal and WhatsApp

## Folder
Create an `images` folder beside the four files.

## How categories work
The buttons no longer open hover mega-menus. They open:
`category.html?category=home`
`category.html?category=hotel`
`category.html?category=office`
`category.html?category=educational`
`category.html?category=outdoor`
`category.html?category=metal`

## How product enquiry works
1. Customer opens a category.
2. Customer sees multiple product photos.
3. Customer clicks a product.
4. An enquiry popup opens with product image and product name.
5. Customer enters name, mobile, quantity and message.
6. "Send Enquiry on WhatsApp" opens WhatsApp with a pre-filled message.

## Adding your real photos
Replace/add files inside `images/` using the names used in `script.js`.
If a file is missing, the website shows a temporary placeholder automatically.

Important:
- Keep `index.html`, `category.html`, `style.css`, `script.js` in the same folder.
- Keep the `images` folder beside them.
- The WhatsApp number is set to 8999384239 in script.js.

## Circular category navigation
The six circular category sections on index.html are clickable buttons. Clicking Home, Hotel, Office, Educational, Outdoor or Metal Furniture opens the same reusable category.html page with the selected category. The top navigation buttons use the same routing.
