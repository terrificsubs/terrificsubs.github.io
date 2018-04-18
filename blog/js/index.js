$( window ).load(function() {
  $( "input" ).focus();
  $(document).bind("contextmenu",function(e){
    return false;
  });
});

//VARIABEL RILISAN

var apokrif_ =
		'[Sekte] Fate Apocrypha - 01 [h264-720p][19B8014D].mkv [<a href="https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms">DDL</a>]<br>'+
		'[Sekte] Fate Apocrypha - 02 [h264-720p][Uncensored][ABFCFC38].mkv [<a href="https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms">DDL</a>]<br>'+
		'[Sekte] Fate Apocrypha - 03 [h264-720p][Uncensored][C97B6AC0].mkv [<a href="https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms">DDL</a>]';

var zoku_= 
'[TerrificSubs] Yahari Ore no Seishun Lovecome wa Machigatte Iru. Zoku - OVA [BD 720p AAC][F8355B1E].mkv [<a href="https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms">DDL</a>]';

var violet_=
'[Terrific-Kopi] Violet Evergarden - 01 [6B0B060D].mkv [<a href="https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms">DDL</a>]<br>'+
'[Terrific-Kopi] Violet Evergarden - 02 [9C10EFBB].mkv [<a href="https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms">DDL</a>]';
/////////////////////////////////////////////////////////////////

var help = 
			'rilisan <label class="a">Perintah untuk menampilkan daftar rilisan berserta <b>syntax command-nya</b>.</label><br>'+
          'clear <label class="a">Perintah untuk membersihkan layar.</label><br>'+
           'bantuan <label class="a">Perintah untuk menampilkan menu bantuan.</label>';
var rilisanz =
		  'zoku <label class="a">Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku</label><br>'+
          'apokrif <label class="a">Fate/Apocrypha</label><br>'+
          'violet <label class="a">Violet Evergarden</label><br>'+
          'fgo <label class="a">Fate/Grand Order: First Order</label><br>'+
          'zmksd <label class="a">Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai</label><br>'+
          'mtny <label class="a">Mahoutsukai no Yome</label>';

var dir= ">//";

$( "#iyudha" ).keypress(function( event ) {
  if ( event.which == 13 ){
    
    if( dir === '>//' ){
      switch ( $( "input:last" ).val() ) {
      	case 'apokrif':
      	  $( "input" ).blur();
	        $( "input" ).prop( "disabled", true );
	        $( "#iyudha" ).append("<p id='msg'><label class='text'>"+ apokrif_+"</label></p>");
	        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
	        $( "input" ).focus();
      	  break;
      	  case 'zoku':
      	   $( "input" ).blur();
	        $( "input" ).prop( "disabled", true );
	        $( "#iyudha" ).append("<p id='msg'><label class='text'>"+ zoku_+"</label></p>");
	        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
	        $( "input" ).focus();
      	  break;
      	  case 'violet':
      	    $( "input" ).blur();
	        $( "input" ).prop( "disabled", true );
	        $( "#iyudha" ).append("<p id='msg'><label class='text'>"+ violet_+"</label></p>");
	        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
	        $( "input" ).focus();
      	  break;
      	  case 'fgo':
      	    $( "input" ).blur();
	        $( "input" ).prop( "disabled", true );
	        $( "#iyudha" ).append("<p id='msg'><label class='text'>[AmeAgare-CoffeeTranslation-ExaSubs-LatteSubs-PuellaSubs-Perverted-Sylphia-ShiroSubs-TerrificSubs-TiramiSubs-UnlimitedSubsWorks] Fate Grand Order - First Order [720p-AAC][2DEED0AF].mkv [<a href='https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms'>DDL</a>]</label></p>");
	        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
	        $( "input" ).focus();
      	  break;
      	   case 'zmksd':
      	    $( "input" ).blur();
	        $( "input" ).prop( "disabled", true );
	        $( "#iyudha" ).append("<p id='msg'><label class='text'><a href='https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms'>https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms</a></label></p>");
	        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
	        $( "input" ).focus();
      	  break;
      	   case 'mtny':
      	   $( "input" ).blur();
	        $( "input" ).prop( "disabled", true );
	        $( "#iyudha" ).append("<p id='msg'><label class='text'><a href='https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms'>https://drive.google.com/drive/folders/0B1MQKCcIgDg5Yk5BVWlsSkxOUms</a></label></p>");
	        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
	        $( "input" ).focus();
      	  break;




      	case 'rilisan':
      	  rilisan();
      	  break;
        case 'bantuan':
          bantuan();
          break;
        case 'clear':
          clearz();
          break;
        default:
          erot();
          break;
      }
    }
    
    // Fungsi Bosq
    function rilisan(){
		$( "input" ).blur();
        $( "input" ).prop( "disabled", true );
        $( "#iyudha" ).append("<p id='msg'><label class='text'>" + rilisanz + " </label></p>");
        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
        $( "input" ).focus();
    }

    function bantuan(){
        $( "input" ).blur();
        $( "input" ).prop( "disabled", true );
        $( "#iyudha" ).append("<p id='msg'><label class='text'>" + help + " </label></p>");
        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
        $( "input" ).focus();
    }

    function clearz(){
    		$( "#iyudha>#yudha" ).remove();
        $( "#iyudha>#msg" ).remove();
    		$( "#iyudha" ).append("<p id='yudha'></p>");
    		$( "#iyudha>#yudha" ).append("<label class='text'>"+dir+"</label><input id='ent' class='input' type='text' autocomplete='off'>");
    		$( "input" ).focus();
  	}

    function erot(){
        $( "input" ).blur();
        $( "input" ).prop( "disabled", true );
        $( "#iyudha" ).append("<p id='msg'><label class='text'> " + "Tidak ada perintah '" + $( "input:last" ).val() + "'. Ketik <b>bantuan</b> untuk menampilkan menu bantuan.</label></p>");
        $( "#iyudha" ).append("<p id='yudha'><label class='text'>"+ dir +"</label><input id='ent' class='input' type='text' autocomplete='off'></p>");
        $( "input" ).focus();
    }

    
  }
});