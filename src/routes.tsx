import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import RegisterItems from "./pages/RegisterItems";
import RequestDetails from "./pages/RequestDetails";
import ConsultItems from "./pages/ConsultItems";
import ConsultRequests from "./pages/ConsultRequests";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Main} />
            <Route path="/" exact component={Home} />
            <Route path="/consult-items" component={ConsultItems} />
            <Route path="/consult-requests" component={ConsultRequests} />
            <Route path="/request-details" component={RequestDetails} />
            <Route path="/register-items" component={RegisterItems} />
        </BrowserRouter>
    );
}

export default Routes;