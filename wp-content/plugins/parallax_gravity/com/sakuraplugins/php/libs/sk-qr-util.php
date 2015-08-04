<?php
class SkQR {
	
	 //get QR code image url
	 public function getURL($encodeURL, $iSize = 150) {
	 		$sECLevel = 'L'; $iMargin = 1;
	 		$width = $height = $iSize;
	        $your_url = urlencode($encodeURL);
	        $url  = 'http://chart.apis.google.com/chart?chs='.$width.'x'.$height.'&amp;cht=qr&amp;chld='.$sECLevel . '|' . $iMargin.'&amp;chl='.$your_url;				
			return $url;
	    }

}
?>