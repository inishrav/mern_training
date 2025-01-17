// import SideBarListItem from "../SideBarListItem";

// const SideBarList = () => {
//   const listItemData = [
//     {
//       listItemText: "Home",
//       link: "/",
//     },
//     {
//       listItemText: "About us",
//       link: "/about",
//     },
    
//     {
//       listItemText: "Counter",
//       link: "/counter",
//     },
//     {
//       listItemText: "Contact us",
//       link: "/contact",
//     },
    
//     {
//       listItemText: "Expense",
//       link: "/Expense",
//     },
//     {
//       listItemText: "cart",
//       link: "/cart",
//     },
//   ];
//   return (
//     <div className="sidebar-container__list">
//       <ul>
//         {listItemData.map((item, index) => {
//           return (
//             <SideBarListItem
//               key={index}
//               text={item.listItemText}
//               link={item.link}
//             />
//           );
//         })}
//         {/* <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About us</a>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default SideBarList;

import SideBarListItem from "../SideBarListItem";

const SideBarList = () => {
  const listItemData = [
    {
      listItemText: "Home",
      link: "/",
    },
    {
      listItemText: "About us",
      link: "/about",
    },
    {
      listItemText: "Counter",
      link: "/counter",
    },
    {
      listItemText: "form",
      link: "/form",
    },
  ];
  return (
    <div className="sidebar-container__list">
      <ul>
        {listItemData.map((item, index) => {
          return (
            <SideBarListItem
              key={index}
              text={item.listItemText}
              link={item.link}
            />
          );
        })}
        {/* <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li> */}
      </ul>
    </div>
  );
};

export default SideBarList;