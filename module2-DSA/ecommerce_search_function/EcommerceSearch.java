public class EcommerceSearch {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Education")
        };

        int targetId = 104;

        // Linear Search
        Product result1 = LinearSearch.search(products, targetId);

        if (result1 != null)
            System.out.println("Linear Search Found: " + result1);
        else
            System.out.println("Product not found");

        // Binary Search
        Product result2 = BinarySearch.search(products, targetId);

        if (result2 != null)
            System.out.println("Binary Search Found: " + result2);
        else
            System.out.println("Product not found");
    }
}