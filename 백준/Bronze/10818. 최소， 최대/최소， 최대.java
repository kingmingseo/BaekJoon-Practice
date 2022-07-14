import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 
		
		
		
	
		int a=Integer.parseInt(br.readLine());
		
		int[] arr=new int[a];
		
		StringTokenizer st= new StringTokenizer(br.readLine());
		for (int i=0; i<a; i++) {
			arr[i]=Integer.parseInt(st.nextToken());
		}
		
		int max=arr[0];
		int min=arr[0];
		for(int i=0; i<a; i++){
			if (max<arr[i]) max=arr[i];
			if (min>arr[i]) min=arr[i];
			
			
		}
		
		System.out.print(min+" "+max);
		
			
		
		bw.flush();
		bw.close();
		br.close();
			
		
		
	}
}

