angular.module("myApp", [])
.controller("myAppController", [
  '$scope', 
  ($scope) => {
    $scope.etelek = [
      {nev: 'Pörkölt', kaloria: 350},
      {nev: 'Leves', kaloria: 150},
      {nev: 'Rántott hús', kaloria: 500},
      {nev: 'Töltött káposzta', kaloria: 450},
      {nev: 'Lecsó', kaloria: 220},
      {nev: 'Rakott krumpli', kaloria: 380},
      {nev: 'Gulyás', kaloria: 400},
      {nev: 'Hortobágyi palacsinta', kaloria: 350},
      {nev: 'Jókai bableves', kaloria: 300},
      {nev: 'Túrós csusza', kaloria: 400},
      {nev: 'Kacsa pörkölt', kaloria: 550},
      {nev: 'Töltött paprika', kaloria: 350},
      {nev: 'Pasta Bolognese', kaloria: 600},
      {nev: 'Steak', kaloria: 700},
      {nev: 'Lazacfilé', kaloria: 450}
    ];
  }
]);