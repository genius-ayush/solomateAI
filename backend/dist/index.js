"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routers/auth"));
const message_1 = __importDefault(require("./routers/message"));
const partner_1 = __importDefault(require("./routers/partner"));
const subscription_1 = __importDefault(require("./routers/subscription"));
const user_1 = __importDefault(require("./routers/user"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
}));
// app.use(passport.initialize()) ; 
// app.use(passport.session()) ; 
app.use('/auth', auth_1.default);
app.use('/message', message_1.default);
app.use('/partner', partner_1.default);
app.use('/user', user_1.default);
app.use('subscription', subscription_1.default);
app.get('/', (req, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
