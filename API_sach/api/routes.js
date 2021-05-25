'use strict';
module.exports = function (app) {
    let booksCtrl = require('./controller/BooksController');
    let categorysCtrl = require('./controller/CategoryController');
    let customerCtrl = require('./controller/CustomerController');
    let orderCtrl = require('./controller/OrderController');
    let orderDetailCtrl = require('./controller/OrderDetailController');

    // book
    app.route('/books')
        .get(booksCtrl.get)
        .post(booksCtrl.store);

    app.route('/books/:bookId')
        .get(booksCtrl.detail)
        .put(booksCtrl.update)
        .delete(booksCtrl.delete);

    app.route('/books/search/:value')
        .get(booksCtrl.search);


    //category
    app.route('/categorys')
        .get(categorysCtrl.get)
        .post(categorysCtrl.store);

    app.route('/categorys/:CategoryID')
        .get(categorysCtrl.detail)
        .put(categorysCtrl.update)
        .delete(categorysCtrl.delete);

    app.route('/categorys/search/:value')
        .get(categorysCtrl.search);

    //customer
    app.route('/customers')
        .get(customerCtrl.get)
        .post(customerCtrl.store);

    app.route('/customers/:customerID')
        .get(customerCtrl.detail)
        .put(customerCtrl.update)
        .delete(customerCtrl.delete);

    app.route('/customers/search/:value')
        .get(customerCtrl.search);

    //order
    app.route('/orders')
        .get(orderCtrl.get)
        .post(orderCtrl.store);

    app.route('/orders/:orderID')
        .get(orderCtrl.detail)
        .put(orderCtrl.update)
        .delete(orderCtrl.delete);

    app.route('/orders/search/:value')
        .get(orderCtrl.search);

    //orderDetail
    app.route('/orderdetails')

    app.route('/orderdetails/:orderID')
        .get(orderDetailCtrl.get)
        .get(orderDetailCtrl.getByOrderID)
        .post(orderDetailCtrl.store);

    app.route('/orderdetails/:orderID/:bookID')
        .get(orderDetailCtrl.detail)
        .put(orderDetailCtrl.update)
        .delete(orderDetailCtrl.delete);

    app.route('/orderdetails/search/:value')
        .get(orderDetailCtrl.search);
};