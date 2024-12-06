// 1. 사용자가 form에서 데이터를 입력하고 검색 버튼을 누르면 그 값을 받아와서 서버에 전달
// 2. 서버에서 검색 결과 리스트를 받아와서, 웹페이지에 동적으로 불러오기
// 3. pagination
// 첫 페이지 나오는게 기본이고 다음 버튼을 누를 때마다 다음 페이지로 넘어가기
// 이전 페이지 누르면 이전 페이지로 넘어가기
// 추가적으로 첫페이지에서 이전 버튼 안눌리게 disabled 마지막 페이지에서 다음 버튼 안눌리게

const searchForm = document.querySelector('#search-artist');
const formData = document.querySelector('#artist-name');
const listContainer = document.querySelector('#search-result');
const preButton = document.querySelector('#prev-bttn');
const nextButton = document.querySelector('#next-bttn');
const currentPageCnt = document.querySelector('#current-page');
const totalPageCnt = document.querySelector('#total-page');
const itemsPerPage = 10; // 한페이지당 표시할 최대 검색 데이터 개수

function updatePage(objects,pageNum,totalNum,itemNum){
    // 첫 페이지와 마지막 페이지일 경우 각각 이전 버튼 이후 버튼 비활성화
    if (pageNum==1) {
        preButton.disabled = true;
    } else {
        preButton.disabled = false;
    } 
    if (pageNum == totalNum) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

    let start = (pageNum-1) * itemNum;
    let end = pageNum * itemNum;
    objects.slice(start,end).forEach((object) => {
        const list = document.createElement('li');
        list.innerText = object.Name;
        listContainer.appendChild(list);
    });
    currentPageCnt.innerText = pageNum;
    totalPageCnt.innerText = totalNum;
}

searchForm.onsubmit = (event) => {
    event.preventDefault(); // form 제출의 기본 동작을 막음
    fetch(`/api/search?Name=${formData.value}`)
        .then(response => response.json()) //json을 자바스크립트 객체로 변환
        .then(artists => {
            const totalPage = Math.ceil(artists.length / itemsPerPage);
            let currentPage = 1;
            // 기본 첫 페이지
            updatePage(artists,currentPage,totalPage,itemsPerPage);

            // 이전 버튼과 다음 버튼 클릭시 이벤트
            preButton.onclick = () => {
                if(currentPage > 1){
                    currentPage--;
                    listContainer.innerHTML = "";
                    updatePage(artists,currentPage,totalPage,itemsPerPage);
                }
            }
            nextButton.onclick = () => {
                if(currentPage < totalPage){
                    currentPage++;
                    listContainer.innerHTML = ""
                    updatePage(artists,currentPage,totalPage,itemsPerPage);
                }
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            listContainer.innerHTML = "검색 결과를 로딩하는데 실패했습니다.";
        });

}

