<?php

/**
 * SakuraPixel utils
 */
class GRPUtils {
	
	public function adjustBrightness($hex, $steps) {
	    // Steps should be between -255 and 255. Negative = darker, positive = lighter
	    $steps = max(-255, min(255, $steps));
	
	    // Format the hex color string
	    $hex = str_replace('#', '', $hex);
	    if (strlen($hex) == 3) {
	        $hex = str_repeat(substr($hex,0,1), 2).str_repeat(substr($hex,1,1), 2).str_repeat(substr($hex,2,1), 2);
	    }
	
	    // Get decimal values
	    $r = hexdec(substr($hex,0,2));
	    $g = hexdec(substr($hex,2,2));
	    $b = hexdec(substr($hex,4,2));
	
	    // Adjust number of steps and keep it inside 0 to 255
	    $r = max(0,min(255,$r + $steps));
	    $g = max(0,min(255,$g + $steps));  
	    $b = max(0,min(255,$b + $steps));
	
	    $r_hex = str_pad(dechex($r), 2, '0', STR_PAD_LEFT);
	    $g_hex = str_pad(dechex($g), 2, '0', STR_PAD_LEFT);
	    $b_hex = str_pad(dechex($b), 2, '0', STR_PAD_LEFT);
	
	    return '#'.$r_hex.$g_hex.$b_hex;
	}
	
	
	//utils - convert hex to rgb	
	public function html2rgb($color)
	{
	    if ($color[0] == '#')
	        $color = substr($color, 1);
	    if (strlen($color) == 6)
	        list($r, $g, $b) = array($color[0].$color[1],
	                                 $color[2].$color[3],
	                                 $color[4].$color[5]);
	    elseif (strlen($color) == 3)
	        list($r, $g, $b) = array($color[0].$color[0], $color[1].$color[1], $color[2].$color[2]);
	    else
	        return false;
	    $r = hexdec($r); $g = hexdec($g); $b = hexdec($b);
	    return array($r, $g, $b);
	}	
	
	/**
	 * returns an array - first all the words up to the last word
	 * last - the last word
	 */
	public function breakTitle($txt){
		$response = false;
		$res = explode(' ', $txt);
		if(is_array($res)&&sizeof($res)>0){
			$last = $res[sizeof($res)-1];
			array_splice($res, sizeof($res)-1, 1);
			$response = array('first'=>implode(" ",$res), 'last'=>$last);
		}
		return $response;
	}
	
	//retun custom excerpt length
	public function customExcerptLength($excerpt, $charlength){
		$out ='';
		if ( mb_strlen( $excerpt ) > $charlength ) {
			$subex = mb_substr( $excerpt, 0, $charlength - 5 );
			$exwords = explode( ' ', $subex );
			$excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
			if ( $excut < 0 ) {
				$out =  mb_substr( $subex, 0, $excut );
			} else {
				$out = $subex;
			}
			$out .= '[...]';
		} else {
			$out = $excerpt;
		}
		return $out;			
	}		
	
	
}


?>