
// import { useState, useEffect } from "react";
// import TopBrandsCard from "./TopBrandsCard";

// const PhoneBoxes = ({LatestProductsList}) => {
//     const [columns, setColumns] = useState(3);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 750) {
//                 setColumns(1);
//             } else if (window.innerWidth < 1024) {
//                 setColumns(2);
//             } else {
//                 setColumns(3)
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         handleResize()

//         return(() => {
//             window.removeEventListener('resize', handleResize)
//         });
//     }, [setColumns])

//     const getGridColumnsClass = () => {
//         switch (columns) {
//             case 1:
//                 return "grid-cols";
//             case 2:
//                 return "grid-cols-2"
//             default:
//                 return "grid-cols-3";
//         }
//     };
//     return (
//         <div className={`grid ${getGridColumnsClass()} max-xl:gap-4 mx-10 gap-4 max-md:gap-6 mt-6`}>
//                 {LatestProductsList.slice(0, columns + columns).map((product) => (
//                     <TopBrandsCard
//                     key={product.name}
//                     name={product.name} 
//                     image={product.image}
//                     price={product.price}
//                     discount={product.discount}
//                     />
//             ))}
//         </div>
//     )
// }

// export default PhoneBoxes;
