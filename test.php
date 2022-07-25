<?php
$url = 'https://api.elasticemail.com/v2/email/send';

try{
        $post = array('from' => 'lucianooromero1@gmail.com',
		'fromName' => 'Your Company Name',
		'apikey' => '389F18972B7310A4FA5EB4CA7D5A2ED2080630BE78883E78DA0A43271CD67F8FAFF33663A8CDD01B40D35FDF718EF472',
		'subject' => 'Your Subject',
		'to' => 'licharomero97@gmail.com;',
		'bodyHtml' => '<h1>Html Body</h1>',
		'bodyText' => 'Text Body',
		'isTransactional' => false);
		
		$ch = curl_init();
		curl_setopt_array($ch, array(
            CURLOPT_URL => $url,
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => $post,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER => false,
			CURLOPT_SSL_VERIFYPEER => false
        ));
		
        $result=curl_exec ($ch);
        curl_close ($ch);
		
        echo $result;	
}
catch(Exception $ex){
	echo $ex->getMessage();
}
?>