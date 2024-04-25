const urlInput =
    document.getElementById("urlInput");
const addBookmarkButton =
    document.getElementById("addBookmark");
const deleteAllButton =
    document.getElementById("deleteAll");
const bookmarkList =
    document.getElementById("bookmarkList");

function isValidURL(url) {
    const pattern =
        /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return pattern.test(url);
}


addBookmarkButton.addEventListener(
    "click", () => {
        const url = urlInput.value.trim();
        if (isValidURL(url)) {
            const bookmarkItem = document.createElement("li");
            bookmarkItem.classList.add("bookmark-item");
            bookmarkItem.innerHTML =
                `<a href="${url}" taret="_blank">${url}</a> 
			<div class="buttons"> 
				<button class="edit"g>Edit</button> 
				<button class="delete">Delete</button> 
			</div>`;
            bookmarkList.appendChild(bookmarkItem);
            urlInput.value = "";
            addEditBookmarkListener(bookmarkItem);
            addDeleteBookmarkListener(bookmarkItem);
        }
        else {
            alert(
                "Please enter a valid URL (http:// or https://)."
            );
        }
    });

deleteAllButton.addEventListener(
    "click", () => {
        while (
            bookmarkList.firstChild) {
            bookmarkList.removeChild
                (bookmarkList.firstChild)
        }
    });

function addEditBookmarkListener(
    bookmarkItem) {
    const editButton =
        bookmarkItem.querySelector(".edit");
    const bookmarkLink =
        bookmarkItem.querySelector("a");

    editButton.addEventListener(
        "click", () => {
            const newURL = prompt("Edit the URL:",
                bookmarkLink.getAttribute("href"));
            if (newURL && isValidURL(newURL)) {
                bookmarkLink.setAttribute("href", newURL);
                bookmarkLink.innerHTML = newURL;
            }
            else if (newURL) {
                alert(
                    "Please enter a valid URL (http:// or https://)."
                );
            }
        });
}

function addDeleteBookmarkListener(
    bookmarkItem) {
    const deleteButton =
        bookmarkItem.querySelector(".delete");
    deleteButton.addEventListener("click", () => { bookmarkItem.remove(); });
}
