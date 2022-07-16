import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.StringTokenizer;
import java.util.stream.Stream;


public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 
		
		int arr[]=new int[10];
		int count = 0;
		int ans=0;
		int temp=0;
		for(int i=0; i<10; i++) {
			int a=Integer.parseInt(br.readLine());
			int b= a%42;
			arr[i]=b;
					
		}
		
		Set<Integer> set = new HashSet<>();
		
		 for(int loop : arr) {
			set.add(loop);
		 }
			
		Stream<Integer> setS = set.stream();		
		int [] newArr = new int [set.size()];
		Iterator<Integer> it = set.iterator();
		for(int i = 0; i < newArr.length; i++ ) {
			newArr[i] = it.next();
		}

		System.out.println(newArr.length);
		
				
		
		
		
		
		bw.flush();
		bw.close();
		br.close();
			
		
		
	}

}
