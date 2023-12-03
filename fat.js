function countWords(paragraph) {
    // Remove extra white spaces and split the paragraph by spaces
    const words = paragraph.trim().split(/\s+/);
    
    // Return the number of words
    return words.length;
  }
  
  // Example usage:
  const paragraph = "This is a sample paragraph with some words.";
  const wordCount = countWords(paragraph);
  console.log("Word count:", wordCount); // Output: Word count: 8
  