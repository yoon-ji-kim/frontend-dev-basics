/**
 *  default parameter
 */
const print = function(start, end ='\n') {
    console.log(start.join(end));
}
print(['Always', 'with', 'me']);
print(['Always', 'with', 'me'], ' ');

