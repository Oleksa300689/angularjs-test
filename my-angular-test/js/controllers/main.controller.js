angular.module("Controllers", ["Services"]).controller("mainCtrl", mainCtrl)

mainCtrl.$inject = ["mainService"];

function mainCtrl(mainService) {
    
    this.articles = mainService.articles.article;
    this.showArticle = mainService.showArticle;
    this.hideArticle = mainService.hideArticle;
    
}