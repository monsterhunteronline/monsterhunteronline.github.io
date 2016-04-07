    <?php
        //connect  to the database
        $db=mysql_connect ("localhost:3036",  "monsktwy_reaver1", "reaver1password") or die ('I cannot connect  to the database because: ' . mysql_error());
        //-select  the database to use
        $mydb=mysql_select_db("monsktwy_setbuilder");
        //-query  the database table
        mysql_query ("set character_set_client='utf8'");
        mysql_query ("set character_set_results='utf8'");
        $ID=$_GET['Waist'];
        $sql="SELECT * FROM armor WHERE id=$ID";
        //-run  the query against the mysql query function
        $result=mysql_query($sql);
        $row=mysql_fetch_array($result);
        $Image=$row['image'];
        $ItemName=$row['piece_name'];
        $ItemType=$row['type'];
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
        echo "<div class='infocontainer' id='waist_button'><img src='../images/" .$Image. ".png' class='armorimage skill" .$ItemName. "'></div><div class='infocontainer w3-container'><table class='helmettable'><tr><td class='skill" .$ItemName. "'>" .$ItemName. "(" .$ItemType. ")</td><td class='" .$Skill1. " skill" .$Skill1Num. "'>" .$Skill1. " <span class='plus" .$Skill1Num. "'>+</span>" .$Skill1Num. "</td><td class='" .$Skill2. " skill" .$Skill2Num. "'>" .$Skill2. " <span class='plus" .$Skill2Num. "'>+</span>" .$Skill2Num. "</td><td class='" .$Skill3. " skill" .$Skill3Num. "'>" .$Skill3. " <span class='plus" .$Skill3Num. "'>+</span>" .$Skill3Num. "</td><td class='" .$Skill4. " skill" .$Skill4Num. "'>" .$Skill4. " <span class='plus" .$Skill4Num. "'>+</span>" .$Skill4Num. "</td><td class='" .$Skill5. " skill" .$Skill5Num. "'>" .$Skill5. " <span class='plus" .$Skill5Num. "'>+</span>" .$Skill5Num. "</td></tr></table>";
        ?>