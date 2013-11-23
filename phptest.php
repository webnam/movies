<?php 
	$jsonString = file_get_contents('src/func/movielist/movielisttest.json');
	$data = json_decode($jsonString);

	// $data->Movies->enders_game->activity_name = "TENNIS";
	// echo $data->Movies->enders_game->moviename;
	error_log( print_r( $data->Movies, 1 ) );
	// echo "test";

	// $newJsonString = json_encode($data);
	// file_put_contents('src/func/movielist/movielisttest.json', $newJsonString);
?>