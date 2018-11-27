/**
 * This function acts like PHP's spaceship operator "<=>".
 * @see http://php.net/manual/en/migration70.new-features.php#migration70.new-features.spaceship-op
 * If `lhs` (left hand side) is LESS THAN the `rhs` (right hand side), the return is -1;
 * If `lhs` (left hand side) is EQUALS to the `rhs` (right hand side), the return is 0;
 * If `lhs` (left hand side) is GREATER THAN the `rhs` (right hand side), the return is 0;
 * @param lhs
 * @param rhs
 * @return {-1|0|1}
 */
export default function spaceship(lhs, rhs) {
  if (lhs < rhs) {
    return -1;
  }
  if (lhs === rhs) {
    return 0;
  }
  return 1;
}
