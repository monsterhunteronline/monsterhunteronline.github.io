<?php
    //connect  to the database
    $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error());
    //-select  the database to use
    $mydb=mysql_select_db("monsktwy_setbuilder");
    //-query  the database table
    mysql_query ("set character_set_client='utf8'");
    mysql_query ("set character_set_results='utf8'");
    $idnum=$_GET['idnum'];
    $sql="SELECT * FROM armor WHERE id LIKE '%$idnum%'";
    //-run  the query against the mysql query function
    $result=mysql_query($sql);
    //-create  while loop and loop through result set
        $ItemName=$row['piece_name'];
        $SetName=$row['set_name'];
        $Skills=$row['skills'];
        $ID=$row['id'];
        $Level=$row['level'];
        $Type=$row['type'];
        $ArmorType=$row['armor_type'];
        $Image=$row['image'];
        $Skill1=$row['skill1'];
        $Skill1Num=$row['skill1_num'];
        $Skill2=$row['skill2'];
        $Skill2Num=$row['skill2_num'];
        $Skill3=$row['skill3'];
        $Skill3Num=$row['skill3_num'];
        $Skill4=$row['skill4'];
        $Skill4Num=$row['skill4_num'];
        $Skill5=$row['skill5'];
        $Skill5Num=$row['skill5_num'];
    //-display the result of the array
    echo "\n";
    mysql_close();
?>