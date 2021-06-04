import { useLocation } from 'react-router-dom';
import React from 'react'
import MainPage2 from "./MainPage2";
// export default class MainPage extends Component {
//     render() {
//         let { title, discount, message, buttonText, endDate, imageUrl } = useSelector(state => state)
//         return (
//             <div className="container" style={{ backgroundImage: `url(${imageUrl})` }}>
//                 <Box title={title} discount={discount} message={message} buttonText={buttonText} time={endDate} />
//             </div>
//         )
//     }
// }

export default function MainPage() {
    const location = useLocation();
    return (
        <MainPage2 title={location.state.title} discount={location.state.discount} message={location.state.message} buttonText={location.state.buttonText} endDate={location.state.endDate} imageUrl={location.state.imageUrl} />
    )
}