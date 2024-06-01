#include <bits/stdc++.h>
using namespace std;
#define int long long
#define fi first
#define se second
#define pb push_back
#define eb emplace_back
#define all(vr) vr.begin(), vr.end()
#define rall(vr) vr.rbegin(), vr.rend()
#define ll long long
#define ld long double
#define pii pair<int, int>
#define vi vector<int>
#define vll vector<ll>
#define For(i, l, r) for (int i=l; i<=r; i++)
#define Fod(i, r, l) for (int i=r; i>=l; i--)
#define wh while
#define yes cout << "YES" << nl
#define no cout << "NO" << nl
#define si size()
#define pii pair<int, int>
#define mina *min_element
#define maxa *max_element
#define fast_in_out ios_base::sync_with_stdio(false); cin.tie(NULL);
const char nl = '\n';
const int maxN = 1e6 + 2;
const int minN = 1e5 + 10;
const int mod = 1e9 + 7;
const int INF = 1e18;
struct Node {
	vector <int> child;
	int cnt, exist;
};
Node trie[maxN];
int curr;
int new_node() {
	curr++;
	trie[curr].child.assign(10, -1);
	trie[curr].cnt = trie[curr].exist = 0;
	return curr;
}

void add_node(string s) {
	int pos=0;
	for (auto x : s) {
		int c=x-'0';
		if (trie[pos].child[c]==-1) {
			trie[pos].child[c]=new_node();
		}
		pos=trie[pos].child[c];
		trie[pos].cnt++;
	}
	trie[pos].exist++;
}

string ansMin="999999999999999999999", ansMax="0";
void Find(int posx, int posy, string ans) {
	if (trie[posx].exist!=0) {
		cout << -1 << nl;
		ansMin=min(ansMin, ans);
		ansMax=max(ansMax, ans);
		return;
	}
	for (int i=0; i<10; i++) {
		string t=to_string(i);
		for (int x=10, y=i; y<=10; x--, y++) {
			if (posx==posy) {
				if (x==y) {
					if (trie[posx].child[x%10]!=-1 && trie[trie[posx].child[x%10]].cnt>=2) {
						string tmp="";
						tmp+=ans;
						tmp+=t;
						Find(trie[posx].child[x%10], trie[posx].child[y%10], tmp);
					}
				} else {
					if (trie[posx].child[x%10]!=-1 && trie[posy].child[y%10]!=-1) {
						string tmp="";
						tmp+=ans;
						tmp+=t;
						Find(trie[posx].child[x%10], trie[posy].child[y%10], tmp);
					}
				}
			} else {
				if (trie[posx].child[x%10]!=-1 && trie[posy].child[y%10]!=-1) {
					string tmp="";
					tmp+=ans;
					tmp+=t;
					Find(trie[posx].child[x%10], trie[posy].child[y%10], tmp);
				}
			}
		}
	}
}
void solve()
{
	trie[0].child.assign(10, -1);
	trie[0].cnt = trie[0].exist = 0;
	int n; cin >> n;
	vector <string> a(n);
	int mx=-1;
	For(i, 0, n-1) {
		cin >> a[i];
		int len=a[i].size();
		mx=max(mx, len);
	}
	For(i, 0, n-1) {
		while (a[i].size()<mx) a[i]="0"+a[i];
		add_node(a[i]);
	}
	string t="";
	Find(0, 0, t);
	//cout << ansMin << " " << ansMax;
}
signed main()
{
	fast_in_out
	system("color 2");
	int t=1;
//	cin >> t;
	wh (t--)
		solve();
	return 0;
}
