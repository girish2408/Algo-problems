function isValidSubsequence(array, sequence) {
    // Write your code here.
      let part_of_it = true;
      let duplicate = array.slice();
      if(sequence.length > duplicate.length) {
          return false;
      }
      for(let el of sequence) {
          const findByIndex = duplicate.findIndex(eachEl => el === eachEl);
          if(findByIndex >= 0) {
            duplicate = duplicate.splice(findByIndex + 1, array.length);
          } else {
              return false;
          }
      }
        return part_of_it
  }

  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, -1, 10])



  // if 1 found at index 1 