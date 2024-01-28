document.addEventListener('DOMContentLoaded', () => {
    const list1 = document.getElementById('list1');
    const list2 = document.getElementById('list2');

    list1.addEventListener('click', moveItem);
    list2.addEventListener('click', moveItem);

    const targetListMap = {
        list1: list2,
        list2: list1,
    };

    function moveItem(event) {
        const item = event.target.closest('a');
        const targetList = targetListMap[event.currentTarget.id];

        targetList.appendChild(item);
    }
});
// const list1 = document.getElementById('list1');
// const list2 = document.getElementById('list2');
// list1.addEventListener('click', handleClick);
// list2.addEventListener('click', handleClick);
//
//     function handleClick(event) {
//         if (event.target.closest("a")) {
//             getlist(event.currentTarget.id).appendChild(event.target.closest())
//         }
//     }
//    function getList(id){
//         const lists={
//             list1:list2,
//             list2:list1
//         }
//         return lists(id)
//    }
// //
// function handleClick(event) {
//     const target = event.target.closest("a");
//     if (target) {
//         const currentList = event.currentTarget;
//         const otherList = currentList === list1 ? list2 : list1;
//         otherList.appendChild(target.parentNode);
//     }
// }