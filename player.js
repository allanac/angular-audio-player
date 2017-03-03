angular.module("player", []).controller("audioplayer",
function($scope)
{
    $scope.prefix = "https://upload.wikimedia.org/wikipedia/commons/";
    $scope.list =
    [
        {name:"Traditional Scottish music",group:"european",src:"4/4f/ScottishCeltic.ogg"},
        {name:"陽關三疊",group:"eastern asian",src:"6/60/Guqin-Yangguan_Sandie.ogg"},
        {name:"Der Hölle Rache kocht in meinem Herzen",group:"european",src:"7/7d/Der_Hoelle_Rache.ogg"},
        {name:"The Stars and Stripes Forever",group:"american",src:"5/59/The_Stars_and_Stripes_Forever_-_U.S._Navy_Band.ogg"},
    ];
   $scope.shuf_song = function()
   {
        var music_id = Math.floor(Math.random() * $scope.list.length );
        $scope.list_model = $scope.list[music_id];
   }
});
