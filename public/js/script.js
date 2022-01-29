var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var apiKey = "api_key=67a465f165043b63372ea02407bc5582";
var baseUrl = "https://api.themoviedb.org/3";
var imgUrl = "https://image.tmdb.org/t/p/w500";
var popularUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
var genreUrl = baseUrl + "/genre/movie/list?" + apiKey;
var searchUrl = baseUrl + "/search/movie?" + apiKey + "&query=";
var movieContainer = document.getElementById("movie-container");
var form = document.getElementById("form");
var search = document.getElementById("search");
// home page
var fetchMovieGenre = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var response, data, genres;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                if (response.status == 200) {
                    console.log("It's working!");
                }
                else if (response.status == 404) {
                    console.log("Something wrong, try again");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                genres = data.genres;
                return [2 /*return*/, genres];
        }
    });
}); };
var fetchMovie = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var response, data, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                if (response.status == 200) {
                    console.log("It's working!");
                }
                else if (response.status == 404) {
                    console.log("Something wrong, try again");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                result = data.results;
                displayMovie(result, url);
                return [2 /*return*/];
        }
    });
}); };
var displayMovie = function (result, url) { return __awaiter(_this, void 0, void 0, function () {
    var titleList, categoryIdList, backdropUrlList, posterUrlList, overviewList, releaseDateList, voteList, genres, categoryNameList, createCardContainer, setCreateCardContainer, createCard, createCardList, originalTitle, originalCategoryName, originalPosterUrl, originalOverview, originalReleaseDate, newUrl, createDetailCard, btnIdStr, btnId, title_1, categoryName_1, posterUrl_1, overview_1, releaseDate_1, createDetailCard, btnIdStr, btnId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                titleList = result.map(function (data) { return data.title; });
                categoryIdList = result.map(function (data) { return data.genre_ids[0]; });
                backdropUrlList = result.map(function (data) { return data.backdrop_path; });
                posterUrlList = result.map(function (data) { return data.poster_path; });
                overviewList = result.map(function (data) { return data.overview; });
                releaseDateList = result.map(function (data) { return data.release_date; });
                voteList = result.map(function (data) { return data.vote_average; });
                return [4 /*yield*/, fetchMovieGenre(genreUrl)];
            case 1:
                genres = _a.sent();
                categoryNameList = createCategoryNameList(categoryIdList, genres);
                if (url !== popularUrl) {
                    window.localStorage.setItem("newTitleList", JSON.stringify("" + titleList));
                    window.localStorage.setItem("newCategoryNameList", JSON.stringify("" + categoryNameList));
                    window.localStorage.setItem("newPosterUrlList", JSON.stringify("" + posterUrlList));
                    window.localStorage.setItem("newOverviewList", JSON.stringify("" + overviewList));
                    window.localStorage.setItem("newReleaseDateList", JSON.stringify("" + releaseDateList));
                    window.localStorage.setItem("url", JSON.stringify(url));
                }
                createCardContainer = function () {
                    var movieContainer = document.getElementById("movie-container");
                    var cardContainer = document.createElement("div");
                    cardContainer.setAttribute("class", "row card-container");
                    movieContainer.append(cardContainer);
                };
                setCreateCardContainer = function (column) {
                    for (var i = 0; i < column; i++) {
                        createCardContainer();
                    }
                };
                createCard = function (column, itemIndex) {
                    var cardContainer = document.getElementsByClassName("card-container")[column];
                    var cardList = document.createElement("a");
                    Object.assign(cardList, {
                        className: "card col-sm",
                        style: "width: 18rem",
                        href: "detail.html",
                        id: "" + itemIndex,
                        onclick: function () {
                            window.localStorage.setItem("btnId", JSON.stringify("" + itemIndex));
                        }
                    });
                    var shortOverviewList = overviewList.map(function (overview) {
                        return overview.length >= 50 ? overview.substring(0, 50) + " ..." : overview;
                    });
                    cardList.innerHTML = "\n      <div>\n        <img style=\"width:100%\" src= " + imgUrl + backdropUrlList[itemIndex] + "\n        onerror=\"this.onerror=null;this.src='images/error-image.jpeg'\">\n      </div>\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">" + titleList[itemIndex] + "</h2>\n        <h3 class=\"card-text\">" + categoryNameList[itemIndex] + "</h3>\n        <p class=\"hide\">" + shortOverviewList[itemIndex] + "</p>\n        <p class=\"hide\">" + releaseDateList[itemIndex] + "</p>\n        <span class=" + getColor(voteList[itemIndex]) + ">\n          " + voteList[itemIndex] + "\n        </span>\n      </div>\n  ";
                    cardContainer.append(cardList);
                };
                createCardList = function (row, column) {
                    setCreateCardContainer(column);
                    for (var t = 0; t < column; t++) {
                        for (var i = 0; i < row; i++) {
                            createCard(t, i + row * t);
                        }
                    }
                };
                if (window.location.href.indexOf("detail.html") > 0) {
                    originalTitle = JSON.parse(window.localStorage.getItem("newTitleList"));
                    originalCategoryName = JSON.parse(window.localStorage.getItem("newCategoryNameList"));
                    originalPosterUrl = JSON.parse(window.localStorage.getItem("newPosterUrlList"));
                    originalOverview = JSON.parse(window.localStorage.getItem("newOverviewList"));
                    originalReleaseDate = JSON.parse(window.localStorage.getItem("newReleaseDateList"));
                    newUrl = JSON.parse(window.localStorage.getItem("url"));
                    if (url == popularUrl && newUrl == null) {
                        createDetailCard = function (itemIndex) {
                            var detail = document.getElementById("movie-container-detail");
                            var createDetailContainer = document.createElement("div");
                            createDetailContainer.setAttribute("class", "card col-md-8");
                            createDetailContainer.innerHTML = "\n          <div class=\"detail-card\">\n            <div>\n              <img class=\"card-image__detail\" src= " + imgUrl + posterUrlList[itemIndex] + " onerror=\"this.onerror=null;this.src='images/error-image-detail.jpeg'\"}>\n            </div>\n            <div class=\"card-body\">\n              <h1 class=\"card-title\" class=\"card-title__detail\">" + titleList[itemIndex] + "</h1>\n              <h2 class=\"card-text\">" + categoryNameList[itemIndex] + "</h2>\n              <h4>" + releaseDateList[itemIndex] + "</h4>\n              <p>" + overviewList[itemIndex] + "</p>\n              <a href=\"index.html\" button type=\"button\" class=\"btn btn-primary\">\n                > Back\n              </a>\n            </div>\n          </div>\n          ";
                            detail.append(createDetailContainer);
                        };
                        btnIdStr = JSON.parse(window.localStorage.getItem("btnId"));
                        btnId = parseInt(btnIdStr);
                        createDetailCard(btnId);
                        localStorage.clear();
                    }
                    else {
                        title_1 = originalTitle.split(",");
                        categoryName_1 = originalCategoryName.split(",");
                        posterUrl_1 = originalPosterUrl.split(",");
                        overview_1 = originalOverview.split(",");
                        releaseDate_1 = originalReleaseDate.split(",");
                        createDetailCard = function (itemIndex) {
                            var detail = document.getElementById("movie-container-detail");
                            var createDetailContainer = document.createElement("div");
                            createDetailContainer.setAttribute("class", "card col-md-8");
                            createDetailContainer.innerHTML = "\n          <div class=\"detail-card\">\n            <div>\n              <img class=\"card-image__detail\" src= " + imgUrl + posterUrl_1[itemIndex] + " onerror=\"this.onerror=null;this.src='images/error-image-detail.jpeg'\">\n            </div>\n            <div class=\"card-body\" class=\"card-title__detail\">\n              <h1 class=\"card-title\">" + title_1[itemIndex] + "</h1>\n              <h2 class=\"card-text\">" + categoryName_1[itemIndex] + "</h2>\n              <h4>" + releaseDate_1[itemIndex] + "</h4>\n              <p>" + overview_1[itemIndex] + "</p>\n                <a href=\"index.html\" type=\"button\" class=\"btn btn-primary\">\n                  > Back\n                </a>\n            </div>\n          </div>\n          ";
                            detail.append(createDetailContainer);
                        };
                        btnIdStr = JSON.parse(window.localStorage.getItem("btnId"));
                        btnId = parseInt(btnIdStr);
                        createDetailCard(btnId);
                        localStorage.clear();
                    }
                }
                else {
                    // home page
                    searchByQuery();
                    createCardList(4, 5);
                }
                return [2 /*return*/];
        }
    });
}); };
var createCategoryNameList = function (categoryIdList, genres) {
    var categoryNameList = [];
    for (var i = 0; i < categoryIdList.length; i++) {
        for (var t = 0; t < genres.length; t++) {
            if (categoryIdList[i] == genres[t].id) {
                categoryNameList.push(genres[t].name);
            }
        }
    }
    return categoryNameList;
};
fetchMovie(popularUrl);
var searchByQuery = function () {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var searchWord = search.value;
        window.localStorage.setItem("searchWord", JSON.stringify("" + searchWord));
        if (searchWord) {
            movieContainer.innerHTML = "";
            fetchMovie("" + searchUrl + searchWord);
            search.value = "";
        }
        else if (searchWord == undefined) {
            alert("please input any value");
        }
    });
};
var getColor = function (vote) {
    if (vote >= 8) {
        return "green";
    }
    else if (vote >= 5) {
        return "orange";
    }
    else {
        return "red";
    }
};
