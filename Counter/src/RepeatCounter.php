<?php
  class RepeatCounter
  {
    function CountRepeats($first_input, $second_input)
    {
      $result = array();
      $sentence = explode(" ", $second_input);
      foreach ($sentence as $key) {
        if (strtolower($first_input) == strtolower($key)){
          array_push($result, $key);
        }
      }
      return $result;
    }
  }
 ?>
