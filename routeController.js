const Route = require('../models/routeModels');

exports.getAll = (req, res) => {
    Route.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query error' });
            console.error(err);
            return;
        }
        res.json(results);
    });
};

exports.addRoute = (req, res) => {

    // const newRoute = {
    //     Route_ID: "RTE002",
    //     Start: "KHI002",
    //     End: "PEW001",
    //     RouteDescription: "Karachi Cantt to Peshawar Cantt"
    //   };  // Testing with static data
    const { Route_ID, Start, End, RouteDescription } = req.body;

    const newRoute = {
        Route_ID: Route_ID,
        Start: Start,
        End: End,
        RouteDescription: RouteDescription
    }

    Route.create(newRoute, (err, routeID) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error creating new route' });
            console.log(err);
            throw err;
        }
        res.json({ success: true, message: 'Route added successfully', Route_ID: routeID });
    });
}


exports.updateRoute = (req, res) => {
    // const {Route_ID, Start, End, RouteDescription} = req.body;

    // const updatedRoute = {
    //     Route_ID: Route_ID,
    //     Start: Start,
    //     End: End,
    //     RouteDescription: RouteDescription
    // }
    const Route_ID = req.params.Route_ID;
    const route = {
        Route_ID: "RTE002",
        Start: "KHI003",
        End: "PEW001",
        RouteDescription: "Karachi Cantt to Peshawar Cantt"
    }

    Route.update(Route_ID, route, (err, results) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error updating route' });
            console.log(err);
            throw err;
        }
        res.json({ success: true, message: 'Route updated successfully', Route_ID: Route_ID });
    })
}
