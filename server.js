const expres =
require ('express');
const mongoose =
require ('mongoose');

const app = express ();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/event',
    {
        userNewurl : true,
        useUnfieldtopology : true,

    });
    constant Event schema = new 
    mongoose. schema ({
        title : String,
        date ; string,
    });
    const eventSchema = new mongoose.model('event', EventSchema);
    app.post (/'api/events', async (req, res) => {
        const events = new
        Event(req.body);
        await Event.save();
         res.send(Events);

    } 

    );
    appp.get ('/app ')

