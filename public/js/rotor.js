/**
 *
 */

var faucet_id=0
	,faucet_url=""
;

function postFaucet(fUrl,btnId){
	var action;

	switch( btnId ){
		case "next_btn":
			action	= "next";
			break;

		case "disable_btn":
			action	= "disable";
			break;
	}

	$.ajax({
		method:"POST",
		dataType: "JSON",
		url: fUrl,
		data:{
			"action":action
			,"prev_faucet_id":faucet_id
			,"cduratin":$("#cduraion").val()
			,"oduratin":$("#oduraion").val()
			,"priority":$("#priority").val()
		},

		success: function(faucet){

			if( action == "disable" )
				alert("Faucet disabled.");

			faucet_id	= faucet.id;
			faucet_url	= faucet.url;

			$("#id_faucet").html(faucet_id);
			$("#cduraion").val(faucet.duration);
			$("#oduraion").val(faucet.duration);
			$("#priority").val(faucet.priority);
			$("#last_payment").html(faucet.last_payment);

			loadFaucet();
    	},

    	error: function(){
			alert("Internal Error while go to next faucet.");
		}
    });
}
//______________________________________________________________________________

function loadFaucet(){
	$("#main_fraim").attr("src", faucet_url );
}
//______________________________________________________________________________ 

function postDashboardData(fUrl){
	$.ajax({
		method:"POST",
		dataType: "JSON",
		url: fUrl,
		data:{
			"id":faucet_id,
			"url":$("#url").val(),
			"info":$("#info").val(),
			"duration":$("#duration").val()
		},

		success: function(data){

    	},

    	error: function(){
			alert("Internal Error while save settints data.");
		}
    });
	
}